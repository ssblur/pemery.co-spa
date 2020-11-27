import Vue from 'vue';
import Toast from './Toast.vue';

const toastTime = 6000;
const Plugin = {
    install(Vue, options) {
        Vue.component('toast', Toast);

        let messages = [];
        let messageCount = 0;
        Vue.prototype.$toast = {
            /**
             * @returns The messages object used for toast notifications.
             */
            messages() {
                return messages;
            },
            /**
             * Sends a message to all toast elements.
             * @param {Object, String} message The message to send. This supports the following properties:
             *      icon: A FontAwesome icon to display with this notification.
             *      content: The message included in this notification.
             *      title: The title to be shown at the top of this notification.
             *      style: Classes (space-separated) to be applied to this notification.
             */
            send(message) {
                if(message === null) throw new Error('You must specify a message when using $toast.');
                if(typeof message === 'object'){
                    messages.id = messageCount;
                    messages.push(message);
                    setTimeout(() => messages.shift(), message.timeout || toastTime)
                } else {
                    messages.push({
                        id: messageCount,
                        content: message,
                    })
                    setTimeout(() => messages.shift(), toastTime)
                }
                messageCount++;
            },
            /**
             * A helper function for setting default styles and titles on messages.
             * @param {Object, String} message A message to send, defined above. @see send
             * @param {Object} props Default properties to set.
             */
            with(message, props) {
                if(typeof message === 'object'){
                    for(key in props)
                        if(message[key] === undefined)
                            message[key] = props[key];
                    this.send(message);
                } else{
                    props.content = message;
                    this.send(props);
                }
            },
            /**
             * Send an info message.
             * @param {Object, String} message A message to send, defined above. @see send
             */
            info(message) {
                this.with(message, {
                    style: 'bg-primary',
                    title: 'Info',
                    icon: 'info-circle',
                });
            },
            /**
             * Send a warning message.
             * @param {Object, String} message A message to send, defined above. @see send
             */
            warning(message) {
                this.with(message, {
                    style: 'bg-warning', 
                    title: 'Warning',
                    icon: 'exclamation-triangle',
                });
            },
            /**
             * Send a danger message.
             * @param {Object, String} message A message to send, defined above. @see send
             */
            danger(message) {
                this.with(message, {
                    style: 'bg-danger', 
                    title: 'Danger',
                    icon: 'exclamation-circle',
                });
            },
            /**
             * Send a success message/
             * @param {Object, String} message A message to send, defined above. @see send
             */
            success(message) {
                this.with(message, {
                    style: 'bg-success', 
                    title: 'Success',
                    icon: 'check-circle',
                });
            }
        };
    },
};

Vue.use(Plugin);
export default Plugin;