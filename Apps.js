function AreaCuadrado()
        {
     var area, base, altura;
            base = prompt("Coloca la base");
            altura = prompt("Coloca la altura");

            base = parseInt(base);
            altura = parseInt(altura);
            area = (base * altura);
            //FORMULA
            alert("El area del cuadrado es:" +area);
        }
        function AreaTriangulo()
        {
     var area, base, altura;
            base = prompt("Coloca la base");
            altura = prompt("Coloca la altura");

            base = parseInt(base);
            altura = parseInt(altura);
            area = (base * altura);
            //FORMULA
            alert("El area del triangulo es: " + ((base * altura)/2));}

            function AreaRectangulo()
            {
         var area, base, altura;
                base = prompt("Coloca la base");
                altura = prompt("Coloca la altura");
    
                base = parseInt(base);
                altura = parseInt(altura);
                area = (base * altura);
                //FORMULA
                alert("El area del triangulo es: " + ((base * altura)));}