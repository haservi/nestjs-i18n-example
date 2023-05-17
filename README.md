# nest-js i18next 샘플

## build

dev

``` bash
npm run dev
```

## Example

쿼리스트링에 언어 값('en', 'ko', 'jp')를 넣거나 Header에 Accpet-Language에 ('en', 'ko', 'jp')를
 넣으면 실시간으로 다국어 처리를 할 수 있습니다.

``` bash
http://localhost:3000/product?lang=en&name=테스트
http://localhost:3000/product?lang=ko&name=테스트
http://localhost:3000/product?lang=jp&name=테스트
```
