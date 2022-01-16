import {render, screen} from '@testing-library/react'
import {toBeInTheDocument, toHaveClass} from '@testing-library/jest-dom'
import Home from '../pages'
import carsDataMock from '../__mocks__/carsDataMock'

describe('Home', () => {
    it ('renders without crashing having no props', () => {
        render (<Home/>)
    })

    it('renders without crashing having vehicle props but no cart props', () => {
        render(<Home vehicles = {carsDataMock}/>)
    })

    it('renders without crashing having vehicles name in the dom and no cart props', () => {
        render(<Home vehicles = {carsDataMock}/>)

        const vehicleName = screen.getByText('Dodge', {exact: false})
        expect(vehicleName).toBeInTheDocument()
    })
})