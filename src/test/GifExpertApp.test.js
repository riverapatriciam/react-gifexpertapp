import React from 'react';
import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp.js';

describe('Pruebas en el componente <GifExpertApp />', () => { 

    test('Debe mostrar correctamente el componente', () => { 

        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();

     });

     test('Debe mostrar una lista de categorias', () => { 

        const categories = ['FMA', 'One Punch'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);


      })

 })