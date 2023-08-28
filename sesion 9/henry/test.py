import calculadora as LC

while True:

    print('1- Suma \n2- Resta \n3- Miltiplicacion \n4- Divicion \n0- Para salir')
    operacion = int(input("Ingrese el numero de la operacion: "))
    n1 = float(input('Ingresa el 1 numero: '))
    n2 = float(input('Ingresa el 1 numero: '))
    if operacion == 1:
        print(LC.suma(n1, n2))
        print("")
    elif operacion == 2:
        print(LC.resta(n1, n2))
        print("")
    elif operacion == 3:
        print(LC.multiplicacion(n1, n2))
        print("")
    elif operacion == 4:
        print(LC.divicion(n1, n2))
        print("")
    elif operacion == 0:
        print('Gracias por usar la calculadora')
        break



num_estudiantes = int(input("Ingrese el número de estudiantes: "))
datos_estudiantes = {}

for it in range(1,totalEstudiantes + 1 ):
    nombre:
    edad: