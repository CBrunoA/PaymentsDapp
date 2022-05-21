***Notes***
-Podemos usar web3 en otro componente que no sea el que tiene
la blockchain cargada, simplemente importamos web3 y los props del constructor.

-Clases -> se pueden crear funciones y cosas, se usa el this.   Const fdsf = () =>{} componente, es más sencillo e inutil, pueden usarse los hooks, el .this no. si queremos pasar props que sea literlamente todos no con props. {amount, color, type} en vez de {props} y luego usar props.amount

-

**Stuff to add**
-Boton para que trabajadores de la empresa puedan ver los pagos full-transparente de la empresa. Para que solo gente autorizada pueda verlo, habrá un botón de "generar código", 
se almacenará en el smart contract, y si alguien mete ese código en la web para ver los pagos de su empresa, podrá ver todos los pagos.

***To-do***
1-Cambiar el smart contract, ya que hemos cambiado el uso propio. Estaba pensado para funcionar de otra forma. 
It shouldn't save the receiver address. Maybe in other way, assigning a name and a direction and saving it, being able to delete objects in the array to delete someone if we dont want it any longer. 

1-Hacer que al hacer click en add worker aparezca un componente de estos. 
    Pasos: 
    1.En MainButtons hacer que cuando pulsemos el boton add worker haga aparecer el componente worker. Este no se elimina ni guarda, simplemente al dar pay ponemos que 
    se borre el texto de ahi, y lo volvemos a usar. Conseguir que se cierre el componente, tanto enviando el formulario como dando a la cruz.
    Además, si al dar add worker ya esta el componente instanciado, no se instanciará nada.

2.Añadir historial objeto
3.Añadir historial web3

