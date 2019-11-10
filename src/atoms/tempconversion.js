const Fahrenheit=({Ktemp})=> {
    var Ftemp = (Ktemp-273.15)*9/5+32;
    var Fsigfigs = Ftemp.toFixed(1);
    return (Fsigfigs)
};

export default Fahrenheit;