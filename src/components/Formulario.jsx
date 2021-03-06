import React, { useContext, useState } from 'react'
import { CategoriaContext } from '../context/CategoriaContext'
import { RecetasContext } from '../context/RecetasContext'

const Formulario = () => {

    const [busqueda, setBusqueda] = useState({
        nombre: '',
        categoria: ''
    })

    const { categorias } = useContext( CategoriaContext )
    const { buscarReceta, setConsultar } = useContext( RecetasContext )

    const handleChange = (e) => {
        
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    return(
        <form
        className='col-12'
        onSubmit={e => {
            e.preventDefault()
            buscarReceta(busqueda)
            setConsultar(true)
        }}
        >
            <fieldset className="text-center">
                <legend>Busca bebidas por Categoria o Ingrediente</legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        name='nombre'
                        className='form-control'
                        type='text'
                        placeholder='Buscar por Ingrediente'
                        onChange={handleChange}
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name='categoria'
                        onChange={handleChange}
                    >
                        <option value="">-- Seleccionar Categoria --</option>
                        {categorias.map((categoria) => (
                            <option
                                key={categoria.strCategory}
                                value={categoria.strCategory}
                            >{categoria.strCategory}</option>
                        ))}
                    </select>
                </div>

                <div className="col-md-4">
                    <input
                        type="submit"
                        className="btn btn-block btn-primary"
                        value='Buscar Bebidas'
                    />
                </div>
            </div>

        </form>
    )
}

export default Formulario