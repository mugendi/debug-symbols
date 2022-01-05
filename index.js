// Copyright 2022 Anthony Mugendi
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const Debug = require('debug'),
	chalk = require('chalk'),
	logSymbols = require('log-symbols');

const logLevels = {
	debug: { f: chalk.white },
	info: { f: chalk.blueBright, symbol: 'info' },
	warn: { f: chalk.yellowBright, symbol: 'warning' },
	error: { f: chalk.red.bold, symbol: 'error' },
	fatal: { f: chalk.red.bold, symbol: 'error' },

	fail: { f: chalk.red, symbol: 'error' },
	success: { f: chalk.green, symbol: 'success' },
};

class Log {
	#debug;

	constructor(namespace) {
		if (typeof namespace !== 'string')
			throw new Error(
				'You must initialize with a valid (string) namespace'
			);

		this.#debug = Debug(namespace);

		for (let level in logLevels) {
			this[level] = this.#log.bind(this, [level]);
		}

		this.log =  this.#debug
	}

	#log() {
		let args = Array.from(arguments),
			levelName = args.shift(),
			level = logLevels[levelName];

		// colorize
		for (let i in args) {
			args[i] = level.f(args[i]);
		}

		if (level.symbol) {
			args.unshift(logSymbols[level.symbol]);
		}

		this.#debug(...args);
	}

	extend(name) {
		if (typeof name !== 'string')
			throw new Error('You must pass a string: extend(name <string>)');

		this.#debug = this.#debug.extend(name);
	}
}




module.exports = (name) => new Log(name);
