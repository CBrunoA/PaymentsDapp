***Notes***
-Podemos usar web3 en otro componente que no sea el que tiene
la blockchain cargada, simplemente importamos web3 y los props del constructor.

-Clases -> se pueden crear funciones y cosas, se usa el this.   Const fdsf = () =>{} componente, es más sencillo e inutil, pueden usarse los hooks, el .this no. si queremos pasar props que sea literlamente todos no con props. {amount, color, type} en vez de {props} y luego usar props.amount

-

**Stuff to add**
-Boton para que trabajadores de la empresa puedan ver los pagos full-transparente de la empresa. Para que solo gente autorizada pueda verlo, habrá un botón de "generar código", 
se almacenará en el smart contract, y si alguien mete ese código en la web para ver los pagos de su empresa, podrá ver todos los pagos.

***To-do***

1-SOLUCIONAR.
    -Posible solución: No usar viewDeposit, sino que en las funciones deposit y withdraw, ir restando a currentDepositAmount segun ocurran cambios.
    -No se realizan las transacciones.
        -TIENE QUE VER CON EL SMART CONTRACT.
        -SOLUCIONAR ERROR DE LA TRANSACCION. (Probar a crear un nuevo enviroment y poner nuestro código...)


2.Añadir historial objeto
3.Añadir historial web3

