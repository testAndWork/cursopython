# Módulo de funciones de la Biblioteca

"""
  LA funciones a desarrollar son las siguientes:
  
  Agregar libro:
  
  Mostrar libro:
  
  Buscar libro:
  
  Eliminar libro?
  
"""

import datetime

# lista que contendra la informacion de los libros
libro = []


def agregar_libros(titulo, autor, fecha):
    libro.append({'Titulo': titulo, 'Autor': autor, 'Fecha': fecha})


def mostrar_libro():
    for it in libro:
        print(
            f"Título: {it['Titulo'] }, Autor: {it['Autor']}, Fecha de Publicacion {it['Fecha']}")


def buscar_libros(tituloLibro):
    encontrado = False
    for it in libro:
        if tituloLibro.lower() in it['Titulo'].lower():
            print(
                f"Título: {it['Titulo'] }, Autor: {it['Autor']}, Fecha de Publicacion {it['Fecha']}")
            encontrado = True
            break
    if not encontrado:
        print('No existe el libro')


def eliminar_libro(tituloLibro):
    eliminar = False
    for it in libro:
        if tituloLibro.lower() in it['Titulo'].lower():
            print(
                f"Título: {it['Titulo'] }, Autor: {it['Autor']}, Fecha de Publicacion {it['Fecha']}")
            eliminar = True
            break
        libro.remove(tituloLibro)

    if not eliminar:
        print('No existe el libro')
