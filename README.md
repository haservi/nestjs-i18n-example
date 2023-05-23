# nest-js i18next 샘플

## build

dev

``` bash
npm run dev
```

Docker Build

image

``` bash
docker build -t nestjs-i18n-example-image .
```

container

``` bash
docker run -p 3000:3000 --rm -d -v $(pwd):/app --name nestjs-i18n-example nestjs-i18n-example-image
```

위와 같이 Docker를 지정하면 실시간으로 개발 코드 변경 사항을 확인할 수 있습니다.

## Example

쿼리스트링에 언어 값('en', 'ko', 'jp')를 넣거나 Header에 Accpet-Language에 ('en', 'ko', 'jp')를
 넣으면 실시간으로 다국어 처리를 할 수 있습니다.

``` bash
http://localhost:3000/product?lang=en&name=테스트
http://localhost:3000/product?lang=ko&name=테스트
http://localhost:3000/product?lang=jp&name=테스트
```
