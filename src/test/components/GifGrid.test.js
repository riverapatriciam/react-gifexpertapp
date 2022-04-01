import React from 'react';
import { GifGrid } from '../../components/GifGrid';
import { shallow } from 'enzyme';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');


describe('Pruebas en el componete <GifGrid />', () => { 

    const category = 'FMA';
    
    test('Debe mostrar correctamente el componente', () => { 
        
        useFetchGifs.mockReturnValue({
            data:[],
            loading:true
        });
        
        const wrapper = shallow(<GifGrid category={category} />);

        expect(wrapper).toMatchSnapshot();

     })

     test('Debe mostrar items cuando se cargan imagenes de useFecthGifs', () => { 

        const gifs = [{
            id: 'ABC',
            title: 'Title',
            url: 'http://localhost/title.jpj'
        }];
        useFetchGifs.mockReturnValue({
            data:gifs,
            loading: false
        });
        const wrapper = shallow(<GifGrid category={category} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
        


      })

 })