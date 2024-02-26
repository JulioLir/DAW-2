<?php

// FUNCIONES CADENAS -----------------------------

    strtolower("PEPE");//devuelve cadena en minuscula
    strtoupper("Juan"); //Devuelve cadena en Mayuscula
    ucwords("eso no me gusta"); //Devuelve cadena con la primera letra de  cada palabra en mayus 
    implode($separador,$array); //Devuelve una cadena juntando el array añadiendo el separador tras cada parte del array. (join())
    explode($separador,$cadena); //Devuelve un array de cadenas separadas por el separador (str_split())
    lcfirst($cadena); //Devuelve la cadena con la primera letra en minuscula
    trim($cadena); // devuelve  cadena sin espacios alante y detras
    rtrim($cadena); // Devuelve cadena sin espacion de detras
    str_contains($cadena,$subcadena); // Devuelve verdadero si cadena contiene subcadena
    str_ends_with($cadena,$subcadena); // Devuelve verdadero si la cadena termina con subcadena
    str_starts_with($cadena, $subcadena); // Devuelve verdadero si la cadena empieza con la subcadena
    str_pad($cadena,$long,$subcadena); // Devuelve la cadena con un añadido de longitud long utilizando la subcadena
    str_repeat($cadena,$nVeces); // Repite la cadena
    str_replace($remplazable,$remplazador,$cadena); // Sustituye todas las ocurrencias remplazable con remplazador en la cadena
    str_shuffle($cadena); 
    str_word_count($cadena); //cuenta el numero de palabras en una cadena
    strcasecmp($cadena1,$cadena2); // Devuelve < 0 si str1 es menor que str2; > 0 si str1 es mayor que str2 y 0 si son iguales. 
    strcmp($cadena1,$cadena2); //Lo mismo pero tiene en cuenta case
    stripos($cadena,$subcadena,$offset); // devuelve posición de la primera aparición de subcadena en cadena apartir de offset
    strpis($cadena,$subcadena,$offset); // lo mismo pero empezando ignorando case
    strrpos($cadena,$subcadena,$offset); // lo mismo pero empezando desde atras
    strlen($cadena); //long cadena

    //-------------------------------------------------------------------------------------

// FUNCIONES ARRAYS-------------------------------------
 //Unir arrays

    $array1 + $array2; // une ambos ignorando repetidos
    array_merge($array1,$array2,$array3,$etc); //une tantos arrays como se quiera
    array_combine($keys,$values); //Crea un array asociativo apartid de 2 arrays
    sort(); // rsort reverse - asort cambia posición de claves tambien - ksort orden por clave - usort orden por funcion propia- 
    shuffle();
    array_slice($array,$offset,$long); //Devuelve el trozo de array apartir de offset hasta la long indicada
    array_splice(); //sustituye la parte indicada por otra. no devuelve, la cambia.
    array_replace($array1,$array2,$arra3); //Devuelve array con posiciones sustituidas por las posiciones de los otros, yendo en orden
    count();
    in_array();
    is_array();
    array_unique(); //repetidos
