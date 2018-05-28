import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters';
import moment from 'moment';

test('should set text filter object', () => {
    const action = setTextFilter('Some Text');

    expect(action).toEqual({
        type: 'SET_TEXT-FILTER',
        text: 'Some Text'
    });
});

test('should set text filter object with default value', () => {
    const action = setTextFilter();

    expect(action).toEqual({
        type: 'SET_TEXT-FILTER',
        text: ''
    });
});

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));

    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));

    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
});

test('should set sort by date', () => {

    expect(sortByDate()).toEqual({
        type: 'SORT_BY_DATE',
        sortBy: 'date'
    });
})

test('should set sort by amount', () => {

    expect(sortByAmount()).toEqual({
        type: 'SORT_BY_AMOUNT',
        sortBy: 'amount'
    });
})