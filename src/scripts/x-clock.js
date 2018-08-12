class XClock extends XTagElement {
// class XClock {
	connectedCallback() {
		this.start();
	}
	start() {
		this.update();
		this._interval = setInterval(() => this.update(), 1000);
	}
	stop() {
		this._interval = clearInterval(this._data.interval);
	}
	update() {
		this.textContent = new Date().toLocaleTimeString();
	}
	'tap::event'() {
		if (this._interval) this.stop();
		else this.start();
	}
}

xtag.create('x-clock', XClock);
