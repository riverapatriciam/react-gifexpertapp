import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../../src/components/AddCategory.js';


describe('Pruebas en el componente <AddCategory />', () => { 

    const setCategory = jest.fn();
    let wrapper; 

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategory} />);

    });
    
    test('debe mostrarse correctamente', () => { 
        expect(wrapper).toMatchSnapshot();
     })

     test('debe cambiar la caja de texto', () => { 

        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        input.simulate('change', {target:{value}});

        expect(wrapper.find('p').text().trim()).toBe(value);

      })

      test('No debe de postear la informacion con submit', () => { 

        wrapper.find('form').simulate('submit', {preventDefault(){}})

        expect(setCategory).not.toHaveBeenCalled();

       })

       test('debe de llamar el setCategories y limpiar la caja de texto', () => { 

        const input = wrapper.find('input');
        const value = 'Hola';
        
        input.simulate('change', {target:{value}});

        wrapper.find('form').simulate('submit', {preventDefault(){}})

        expect(setCategory).toHaveBeenCalled();

        expect(wrapper.find('input').text().trim()).toBe('');
        

        })

 })