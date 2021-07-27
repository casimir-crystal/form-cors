# form-cors

form-cors is a node.js package designed to protect cross domain attacks form HTTP form request, since form request doesn't make JavaScript same origin policy works. You can see [here](https://stackoverflow.com/questions/11423682/cross-domain-form-posting) for more information. 

This package is a [Nest.js](https://docs.nestjs.com/) middleware(may also works with Express), but it's simple since it just blocks any request with `req.header('content-type') === 'application/x-www-form-urlencoded'`. This maybe aggressive, but you can use configuration like a whitelist though.

* [Installation](#installation)
* [Usage](#usage)
* [Configuration Options](#configuration-options)
* [License](#license)
* [Author](#author)

## Installation

You can install the package from
[npm registry](https://www.npmjs.com/). Installation is done using command
[`npm install` ](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```sh
$ npm install form-cors
```

## Usage

Within your Nest.js `main.ts`, import and use this module like the example below:

```javascript
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import formCors from 'form-cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(formCors());
  
  await app.listen(3000);
}

bootstrap();
```

> **Hint!** This module doesn't block JavaScript cross domain requests! So you should always also set a [cors protection](https://docs.nestjs.com/security/cors).

## Configuration Options

* `whitelist`: Array of domains that can be excluded from the protection, example: `['https://my.domain.com']`
* `exception`: An Exception will be thrown if a client sends a form post. Usually you should set a Nestjs Exception like `new NotAcceptableException()` from `@nestjs/common`.

with configuration, here's a simple snippet:

```javascript
app.use(formCors({
  whitelist: ['https://my.domain.com'],
  exception: new NotAcceptableException('This request is not allowed.'),
}));
```

## License

[MIT License](http://www.opensource.org/licenses/mit-license.php)

## Author

[Casimir Crystal](https://github.com/casimir-crystal) ([casimir.crystal.blue@outlook.com](mailto:casimir.crystal.blue@outlook.com))
