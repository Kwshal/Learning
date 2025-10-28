# drag and drop events:
     - on dragstart
     - on drag
     - on dragend
     - on drop

# relative paths:
     - "/" is the root path.(absolute path)
     - "" or "./" is the current directory. (relative paths)
     - "../" is the parent directory. (relative path)
(relative paths are safer than absolute paths)

# Utility classes:
     .util-cls {
          something: value;
     }
(the point of utility class is add it to any element and it will apply the style to that element. this is important because it makes the code more maintainable and reusable.)

# inheritance:
     someCSSProp: inherit;
(inherit the value of someProp from the parent element)

# Color palette websites:
     - https://colorhunt.co/
     - https://coolors.co/

# Font websites:
     - 1001fonts.com
     - https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap
(i imported the whole range of the weights of orbitron font.)

# CSS property: 
     @font-face {
          font-family: 'Orbitron'; // or any cust name will do
          src: url(<path>);
<!--!  i used the downloaded local font which is at ./fonts/ -->
          font-weight: normal;
          font-style: normal;
     }
# webp (gif-like):
  website for that: https://caniuse.com/webp
  giphy: https://giphy.com/

# 1rem = root element font size 
# 1em = parent element font size
(default rem and em are 16px)
little gotcha: if the parent has a font-size of 2em (32px) then setting its child's font-size to 2em will result in 4em (64px).

## pseudo class

# :hover
 I used it for side effects for the first time.

# :not()
 Makes an exception to a selector.
 example: a:not(:hover)  
     
# :empty()
 Checks if the element is completely empty. not even a space or textContent is there.
 Can be combined with :not to select non-empty elements.

# :has(),

# :where() & :is()


# element with bgdrop-filter and transparent+white+transparent background looked cool

# shift(), unshift(value), push(value), pop() // arrays

# localStorage,
   getItem(key), setItem(key, value),
   removeItem(key), clear(),
   key(index), length, 
   JSON.parse(JSON.stringify(arr)), JSON.stringify(arr), JSON.parse(str)

# parameters vs arguments
    parameters: variables that are defined in the function declaration
    arguments: values that are passed to the function when it is called
          (first time I'm knowing this difference)


# Oklab:
     - https://oklch.github.io/oklch/
     its a color model. its far better than RGB or hex.