import VueDataTable from '@/VueDataTable.vue'
import { mount } from '@vue/test-utils'
import Vuex from 'vuex';
import Vue from "vue";

describe('VueDataTable.vue', () => {
    let actions, mutations, store;

    beforeEach(() => {
        actions = {
            updateRow: jest.fn()
        };
        mutations = {
            getProducts: jest.fn()
        };
        Vue.use(Vuex);

        store = new Vuex.Store({
            state: {
                products: [
                    { ID: 'id1', Name: 'name1', Date: 'date1', Amount: 'amount1', Description: 'test1' },
                    { ID: 'id2', Name: 'name2', Date: 'date2', Amount: 'amount2', Description: 'test2' }
                ]
            },
            actions,
            mutations
        })
    });
    it('should renderer table and rows', () => {
        const wrapper = mount(VueDataTable, { store });
        const rootDiv = wrapper.find('div');
        expect(rootDiv.findAll('table').length).toBe(1);
        const inputs = rootDiv.findAll('input');
        expect(inputs.length).toBe(2);
        expect(inputs.at(0).element.value).toBe('test1');
        expect(inputs.at(1).element.value).toBe('test2');

        expect(rootDiv.findAll('th').length).toBe(5);

        const tds = rootDiv.findAll('td');
        expect(tds.at(0).text()).toBe('id1');
        expect(tds.at(1).text()).toBe('name1');
        expect(tds.at(3).text()).toBe('date1');
        expect(tds.at(4).text()).toBe('amount1');

        expect(tds.at(5).text()).toBe('id2');
        expect(tds.at(6).text()).toBe('name2');
        expect(tds.at(8).text()).toBe('date2');
        expect(tds.at(9).text()).toBe('amount2');

    });
    it('should execute getProducts', () => {
        mount(VueDataTable, { store });
        expect(mutations.getProducts).toHaveBeenCalled();
    });
    it('dispatches "updateRow" when one input value is changed', () => {
        const wrapper = mount(VueDataTable, { store });
        const rootDiv = wrapper.find('div');
        const inputs = rootDiv.findAll('input');
        inputs.at(0).element.value = 'change input';
        inputs.at(0).trigger('input');
        expect(actions.updateRow).toHaveBeenCalled();
    })
});
