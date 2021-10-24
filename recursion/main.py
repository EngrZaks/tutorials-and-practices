# def sum(a,b):
#     print(a + b)
# def sub(a,b):
#     print(a - b)

# def calculate(a, operator, b):
#     if (operator == '+'):
#         print(a + b)
#     elif (operator == '-'):
#         print(a - b)
#     elif (operator == '*'):
#         print(a * b)
# calculate(3, '+', 4)
        
# USING TURTLE
#import turtle
import turtle
# s =  turtle.getscreen()
t = turtle.Turtle()
turtle.bgcolor("black")
turtle.title('Graphical python with Devzaks')
t.speed(20)
t.pencolor('white')
def moveTurtle():
    t.rt(90)
    t.fd(50) 
    t.rt(70)
    t.fd(50) 
    t.rt(70)
for x in range (35):
    moveTurtle()
t.speed(100)
t.goto(100, 100)
t.speed(500)
for x in range (35):
    moveTurtle()
t.goto(100,-100)
t.speed(100)
for x in range (35):
    moveTurtle()
t.goto(100,-100)
t.dot(50)
t.home()

colors = ['red', 'orange', 'green', 'yellow', 'cyan', 'purple', 'pink', 'teal']
t.penup()
t.goto(-150, 50)
t.pendown()
t.pencolor('red')
t.fillcolor('white')
t.speed(20)
t.begin_fill()
for i in range(30):
    t.color(colors[i%7])
    # t.circle(20 + i*5)
    t.circle(50)
    t.rt(20)
t.end_fill()
t.speed(1)
t.fd(100)
t.rt(10)
t.fd(100)
t.lt(5)
t.fd(100)

