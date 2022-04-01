import { shallow } from 'enzyme';
import React from 'react';
import { GifGridItem } from '../../components/GifGridItem.js';


describe('Pruebas en el Componente <GifGridItem />', () => { 
   
    const title = 'Un titulo';
    const url = 'http://localhost/algo.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url}/>);

    // beforeEach( () => {
        
    //     wrapper = shallow(<GifGridItem />);
        

    // });

    test('Debe mostrar <GifGridItem /> correctamente', () => { 
        
        expect(wrapper).toMatchSnapshot();

     });

     test('debe de tener un parrafo con el title', () => { 
        
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);

      })

      test('debe de tener la imagen al url y alt de los props', () => { 
          
        const img = wrapper.find('img');

        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);

       })

       test('debe tener animate__fadeIn', () => { 
           
        const div = wrapper.find('div');

        expect(div.hasClass('animate__fadeIn')).toBe(true);

        })

})