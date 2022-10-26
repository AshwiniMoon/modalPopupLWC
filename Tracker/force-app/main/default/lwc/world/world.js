import {
    LightningElement,track
} from 'lwc';

export default class TrackDecorator extends LightningElement {
    @track inputMessage = 'World';

    handleChange(event) {
        console.log('event.target.value' + event.target.value);
        this.inputMessage = event.target.value;
    }
}