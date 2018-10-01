
import {PolymerElement, html} from '@polymer/polymer';
import {mixinBehaviors} from '@polymer/polymer/lib/legacy/class.js';

import {MutationObserverBehavior} from '../mutation-observer-behavior.js';

class MutationObserverBehaviorTestElement extends mixinBehaviors([MutationObserverBehavior], PolymerElement) {

    static get is() { return 'test-element'}

    changeLocalDomAttribute() {
        this.$.myLocalDiv.setAttribute('test-attr', 42);
    }

    static get template() {
        return html`
            <div id="myLocalDiv"></div>
            <content id="myContent" select=".toInsert"></content>`;
    }
}

customElements.define(MutationObserverBehaviorTestElement.is, MutationObserverBehaviorTestElement);
