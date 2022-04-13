import React from 'react'
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'
import { formatDate } from '../helpers'

import IconSaving from '../img/icono_ahorro.svg'
import IconHome from '../img/icono_casa.svg'
import IconEat from '../img/icono_comida.svg'
import IconExpense from '../img/icono_gastos.svg'
import IconLeisure from '../img/icono_ocio.svg'
import IconHealth from '../img/icono_salud.svg'
import IconSubscriptions from '../img/icono_suscripciones.svg'

const dictionaryIcon = {
    saving: IconSaving,
    eat: IconEat,
    home: IconHome,
    expenses: IconExpense,
    leisure: IconLeisure,
    health: IconHealth,
    subscriptions: IconSubscriptions
}

const Spending = ({ expense, setEditExpense, deleteExpense }) => {
    const { category, name, amount, id, date } = expense
    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => setEditExpense(expense)}>
                Editar
            </SwipeAction>
        </LeadingActions>
    )
    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction onClick={() => deleteExpense(id)}
            destructive={true}>
                Eliminar
            </SwipeAction>
        </TrailingActions>
    )
    return (
        <SwipeableList>
            <SwipeableListItem
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}>
                <div className='gasto sombra'>
                    <div className='contenido-gasto'>
                        <img src={dictionaryIcon[category]} alt="Icono Gasto" />
                        <div className='descripcion-gasto'>
                            <p className='categoria'>{category}</p>
                            <p className='nombre-gasto'>{name}</p>
                            <p className='fecha-gasto'>Agregado el:{' '}
                                <span>{formatDate(date)}</span></p>
                        </div>
                    </div>
                    <p className='cantidad-gasto'>
                        ${amount}
                    </p>
                </div>
            </SwipeableListItem>
        </SwipeableList>
    )
}

export default Spending
