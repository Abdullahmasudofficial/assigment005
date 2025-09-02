### 6. Answer the following questions clearly:

1. What is the difference between
 **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

**getElementById**= it's used to when need the single element object  ( finds one element with the id )


****getElementsByClassName** = it's used to when need a collection of html using class name, (finds the all element same classname)


****querySelector**= it;s used for find the first element that matches  Css selector ,it'return the first value of matching element object ( declear with . # notation)

**querySelectorAll**=it;s used for find the all element that matches  Css selector ,it'return all value || node list thate matching element object 


2. How do you **create and insert a new element into the DOM**?

**ans.** =
first create the element then add  content or attributes or push the created content / attributes with appendChile()
3. What is **Event Bubbling** and how does it work?
**ans.** =event bubbling is like a tree thats have many many branch...and we may think the website is a tree when we click a child element ,he call there parent div ...this continue to happen this way.. 

4. What is **Event Delegation** in JavaScript? Why is it useful?
**ans.**event delegation is a technique or select system  for event handling, its used to clickbal a perent div thats have many child element ,and after then using
(e.terget) for click the main child

we used this for best performence or daynamic elements

5. What is the difference between **preventDefault() and stopPropagation()** methods?

**preventDefault()**=it's stop the default action without stoping the bubbling .
---
**stopPropagation()**=it's stop bubbling  without stopping the default action__



