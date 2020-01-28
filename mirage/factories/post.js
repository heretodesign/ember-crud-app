import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
	title() {
		return 'Post';
	},
	body() {
		return 'hello';
	}
});
