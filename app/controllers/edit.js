import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		editPost() {
			event.preventDefault();

			let post = this.model;
			post.save().then(() => {
				this.transitionToRoute('post', post.id);
			});
		}
	}
});
