import { useState, useEffect } from 'react'

const Filters = ({filter , setFilter}) => {
    return (
        <div className='filtros sombra contenedor'>
            <form action="">
                <div className='campo'>
                    <label htmlFor="">Filtrar Gastos</label>
                    <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}>
                        <option value="">-- Seleccione --</option>
                        <option value="saving">Ahorro</option>
                        <option value="eat">Comida</option>
                        <option value="home">Hogar</option>
                        <option value="expenses">Gastos varios</option>
                        <option value="leisure">Ocio</option>
                        <option value="health">Salud</option>
                        <option value="subscriptions">Suscripciones</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Filters
