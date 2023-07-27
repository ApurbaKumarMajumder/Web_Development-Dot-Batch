# 1. CSS Gradients

Css Gradients lets you display smooth transitions between two or more colors.

* Linear Gradients (goes up/down/left/right/diagonally)
    
        background-image: linear-gradient(direction, color1, color2, ...);

* Radial Gradients (defiend by their center)

        background-image: radial-gradient(shape size at position, colour1, colour2, ..);

* Conic Gradients (rotated around the center)

        background-image: conic-gradient([from angle] [at position], color[degree], color[degree], ...);

# 2. Text-Shadows

This property accepts a comma-separated list of shadows to be applied to the text.

        text-shadow: horizontal distance(px), vertical distance(3px), Opacity (1 to 100), color1, ...

# 3. Overflow Property

The overflow CSS shorthand provides scroll option for both sides. This could be 

        Visible
        Hidden
        scroll
        auto

# 4. Position Property ( By Default it is STATIC )

Relative 
1. It should be in a current window.
2. Gap is maintained in this.
3. You can use Top , Bottom , Right , Left properties. 

Absolute 
1. Relative to its closest position ancestor / parent. 
2. It does not maintain Gap.
3. You can use Top , Bottom , Right , Left properties. 

Sticky
1. IT should be sticky when it is in his parent class (related to parent container ).
2. You can use Top , Bottom , Right , Left properties. 

Fixed 
1. It should be fixed in whole the page / containers.
2. You can use Top , Bottom , Right , Left properties.  

# 5. Display Property

The display property specifies the display behavior (the type of rendering box) of an element.

        inline-block
        inline
        block

# 6. FlexBox

The flex container becomes flexible by setting the display property to flex.

        Flex-direction (row, column, reverse)
        flex-wrap (wrap, nowrap, wrap-reverse)
        flex-flow (shorthand notation for above two)
        justify-content (allign elements on main axis[x-axis])
        align-items (align item on cross axis[y-axis])
        align-content

