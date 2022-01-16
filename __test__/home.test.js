import {render, screen} from '@testing-library/react'
import Home from '../pages'
import carsDataMock from '../__mocks__/carsDataMock'

describe('Home', () => {
    it ('renders without crashing having no props', () => {
        render (<Home/>)
    })

    it('renders without crashing having vehicle props but no cart props', () => {
        render(<Home vehicles = {carsDataMock}/>)
    })
})