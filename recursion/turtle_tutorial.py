import turtle
t = turtle.Turtle()
turtle.bgcolor('black')
t.pencolor('white')
t.speed(50)

def move(distance, angle, color='green'):
    t.pencolor((color))
    t.rt(90)
    t.fd(50)
    t.rt(angle)
    t.fd(distance)
    t.rt(angle)
for i in range(50):
    move(50,40, 'red')
# t.speed(10)
t.goto(100,100)
t.fillcolor('red')
t.begin_fill()
for i in range(50):
    move(60,70)
t.end_fill()

t.goto(-100, 100)
colors = ['red', 'green', 'blue', 'yellow', 'orange', 'cyan', 'teal']
for j in range (300):
    # t.circle(20 + 5*j)
    t.pencolor(colors[j%5])
    t.circle(50)
    t.rt(17)
t.penup()
t.goto(150, -150)
t.pendown()
t.fillcolor('')
t.begin_fill()
for j in range (30):
    t.pencolor(colors[j%5])
    t.circle(20 + 5*j)
t.end_fill()
t.speed(1)
t.lt(90)
t.fd(200)
t.circle(200)