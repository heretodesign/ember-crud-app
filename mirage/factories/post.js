import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
	title(i) {
		return `Post ${i + 1}`;
	},
	body() {
		return faker.random.words();
	}
});
