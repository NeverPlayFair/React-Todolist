import React from "react";



 const Drop = () => {
    return ( <select>
        <form className="ui drop">
        <input type="select" />
        </form>
        <option value="Godzina i czas">
            Godzina i czas
            </option>
        <option value="Koniec zadania">
            Koniec zadania
            </option>
        <option value="Dla kogo">
            Dla kogo
            </option>
        <option selected value="Lista">
            Lista
        </option>
        

    </select>

    );
};

export default Drop;