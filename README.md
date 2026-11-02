# On iOS, `SafeAreaView` ignores `aria-hidden`, `aria-label` and the other `aria-*` props

`ReproducerApp/App.tsx` renders four `SafeAreaView`s, each around a child text: one with `aria-hidden`, one with
`accessibilityElementsHidden`, and two `accessible` ones, labelled with `aria-label` and with `accessibilityLabel`.

Run it on iOS and read its accessibility tree. I read the tree XCUITest reads, with this `App.tsx` as RNTester's root
component, built in Release from React Native's `main` at `9c3e743a6f`, on an iPad Pro (12.9-inch, 4th generation) on
iPadOS 27.2. The reproducer app is set up on React Native 0.89.0-nightly-20261102-47a9917ac.

| `SafeAreaView` | Expected | Seen |
| --- | --- | --- |
| `aria-hidden` | its child is out of the tree | **"Child of SafeAreaView with aria-hidden" is in the tree** |
| `accessibilityElementsHidden` | its child is out of the tree | out |
| `accessible`, `aria-label="Label from aria-label"` | labelled "Label from aria-label" | **labelled "Child of SafeAreaView with aria-label"** |
| `accessible`, `accessibilityLabel="Label from accessibilityLabel"` | labelled "Label from accessibilityLabel" | labelled "Label from accessibilityLabel" |

On Android `SafeAreaView` is `View`, which turns these props into their `accessibility*` counterparts.
