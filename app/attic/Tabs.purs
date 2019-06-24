module Main where

import Prelude

import Concur.Core                          (Widget)
import Concur.Core.Types                    (andd)
import Concur.Core.FRP                      (Signal, display, dyn, hold)
import Concur.React                         (HTML)
import Concur.React.DOM                     (El', button, button', div,
                                             div_, div',
                                             input, nav, p', text)
import Concur.React.Props                   (_type, checked, classList,
                                             className, onChange,
                                             onClick, onFocus,
                                             unsafeTargetValue, value)
import Concur.React.Run                     (runWidgetInDom)
import Control.Alt                          ((<|>))
import Control.Monad.Rec.Class              (forever)
import Control.MultiAlternative             (orr)
import Data.Maybe                           (Maybe(..), fromMaybe)
import Data.Traversable                     (traverse)
import Data.Array                           ((..), (!!), length, zip)
import Data.Tuple                           (Tuple, fst, snd)
import Effect                               (Effect)
import Effect.Class                         (liftEffect)
import Effect.Class.Console                 (log)
import React.SyntheticEvent                 (SyntheticMouseEvent)

hello :: forall a. Widget HTML a
hello = do
  greeting :: String <- orr
    [ "Hello" <$ button [onClick] [text "Say Hello"]
    , "Namaste" <$ button [onClick] [text "Say Namaste"]
    ]
  text (greeting <> " Sailor!")

helloWidget :: forall a. Widget HTML a
helloWidget = do
  greeting :: String <- orr
    [ "Hello" <$ button [onClick] [text "Say Hello"]
    , "Namaste" <$ button [onClick] [text "Say Namaste"]
    ]
  liftEffect $ log ("You chose to say " <> greeting)
  text (greeting <> " Sailor!")

buttonHello :: Widget HTML SyntheticMouseEvent
buttonHello = button [onClick] [text "Say Hello"]

data Action = Changed String | Focused
inputWidget1 :: Widget HTML Action
inputWidget1 = input [(Changed <<< unsafeTargetValue) <$> onChange,
                      Focused <$ onFocus]

type IWState = {focusCount:: Int, currentText :: String}
inputWidget2 :: IWState -> Widget HTML IWState
inputWidget2 st = input
  [ st {focusCount = st.focusCount+1} <$ onFocus
  , ((\s -> st {currentText = s}) <<< unsafeTargetValue) <$> onChange]

showState :: IWState -> String
showState s = "The current value of the input is "
              <> show s.currentText <> ",\n and you have focused it "
              <> show s.focusCount <> " times."

initState :: IWState
initState = {focusCount: 0, currentText: ""}

focusCountWidget :: forall a. Widget HTML a
focusCountWidget = go initState
  where
    go s = div'
      [ p' [text $ showState s]
      , inputWidget2 s
      ] >>= go

-- A counter widget takes the initial count as argument,
-- and returns the updated count
counter :: Int -> Widget HTML Int
counter count = do
  void $ button [onClick] [text (show count)]
  pure (count + 1)

-- Compose a list of counters in parallel
-- The return value is the value of the counter which is clicked
listCounters :: Array Int -> Widget HTML Int
listCounters = orr <<< map counter


-- listCounters2 :: Array Int -> Widget HTML (Array Int)
-- listCounters2 initialCounts = orr (mapWithIndex (mkCount initialCounts) initialCounts)
--   where mkCount initialCountArray index initCount = map (\count -> fromMaybe initialCountArray (updateAt index count initialCountArray)) (counter initCount)

listCounters3 :: Array Int -> Widget HTML (Array Int)
listCounters3 initialCounts = andd (map counter initialCounts)


{- *** Not working currently
-- This is like Elm's State
type Form =
  { name :: String
  , rememberMe :: Boolean
  }

-- This is like Elm's Action
data FormAction
  = Name String
  | RememberMe Boolean
  | Submit

formWidget :: Form -> Widget HTML Form
formWidget form = do
  -- This is like Elm's view function
  res <- div'
    [ Name <$> input [ _type "text", value form.name,
                       unsafeTargetValue <$> onChange]
    , RememberMe <$> input [_type "checkbox", checked form.rememberMe,
                            onChecked]
    , Submit <$ button [value "Submit", onClick]
    ]
  -- This is like Elm's update function
  case res of
    Name s -> formWidget (form {name = s})
    RememberMe b -> formWidget (form {rememberMe = b})
    Submit -> pure form
-}

getGreeting :: Widget HTML String
getGreeting = div'
    [ "Hello" <$ button [onClick] [text "Say Hello"]
    , "Namaste" <$ button [onClick] [text "Say Namaste"]
    ]

showGreeting :: String -> Widget HTML Unit
showGreeting greeting = div'
  [ text (greeting <> " Sailor!")
  , void $ button [onClick] [text "restart"]
  ]

helloGreets :: forall a. Widget HTML a
helloGreets = do
  greeting <- getGreeting
  showGreeting greeting
  helloGreets

type Tab = Widget HTML Void
type Page = Widget HTML Void
type TabPage = {
  tab :: Tab
, page :: Page
}

createTabWidget :: forall a. Array TabPage -> Int -> Widget HTML a
createTabWidget tPages ix0 = do
  tabSel <- tabPageDiv' [
    nav [className "pure-menu-list"] $ tabIndexer tabs
  , ix0 <$ pageAt ix0
  ]
  createTabWidget tPages tabSel
  where
    tabIndexer :: Array Tab -> Array (Widget HTML Int)
    tabIndexer ts = map mkIxedTw $ zip (0 .. length ts) ts
      where
        mkIxedTw :: Tuple Int Tab -> Widget HTML Int
        mkIxedTw ixtb = do
          void $ div [onClick, tabClass] [absurd <$> snd ixtb]
          pure (fst ixtb)
        tabClass = className "pure-menu-item"
    tabs = (\tp -> tp.tab) <$> tPages
    pages :: Array Page
    pages = (\tp -> tp.page) <$> tPages
    emptyPage :: Page
    emptyPage = div' [text "No pages to show!"]
    pageAt :: Int -> Page
    pageAt ix = fromMaybe emptyPage (pages !! ix)
    tabPageDiv' :: El'
    tabPageDiv' els =
      div [className "pure-g"] [
        div [menuTypeClasses] [
          div [tabColClasses] els
        ]
      ]
      where
        menuTypeClasses = classList $
          map Just ["pure-menu", "pure-menu-horizontal"]
        tabColClasses = classList $
          map Just ["pure-u-1", "pure-u-md-1-3"]


abstractPage :: TabPage
abstractPage = {
  tab : div' [text "Abstract"]
, page : div' [p' [text "Nothing much yet."]]
}

refsPage :: TabPage
refsPage = {
  tab : div' [text "References"]
, page : div' [p' [text "References: Nothing much yet."]]
}

tabPages :: Array TabPage
tabPages = [abstractPage, refsPage]

showTabPages :: forall a. Widget HTML a
showTabPages = createTabWidget tabPages 0


main :: Effect Unit
main = runWidgetInDom "root" $ showTabPages

