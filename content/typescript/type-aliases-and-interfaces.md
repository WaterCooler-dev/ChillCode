# 타입 별칭과 인터페이스

자, 이제 여러가지중 타입스크립트의 중요한 축을 담당하는 타입 별칭과 인터페이스에 대해 알아봅시다.

## 타입 별칭

여기 이 함수를 보시죠:

```typescript
function getTriangleArea(dt: { width: number, height: number }): number {
	return dt.width * dt.height / 2;
}
```

아, 삼각형의 넓이를 구하는 함수네요. 또 높이와 넓이를 객체 형식으로 받고 있습니다. 그런데, 도형의 넓이를 구할 때에는 모두 도형의 높이와 넓이를 필요로 합니다. 그럼 사각형의 넓이를 구하려면 이런 함수를 짜야 할 것입니다.

```typescript
function getTriangleArea(dt: { width: number, height: number }): number {
	return dt.width * dt.height / 2;
}

function getSqareArea(dt: { width: number, height: number }): number {
	return dt.width * dt.height;
}
```

똑같은 객체 형식의 매개변수가 똑같이 들어있군요. 코드의 길이도 길어지고, 중복됩니다. 이럴때, 타입 별칭을 사용하는게 좋습니다.

타입 별칭은 똑같은 타입을 재사용하거나 또 다른 이름으로 부르고 싶을때 사용하는 별칭입니다. 타입 별칭은 이렇게 지정할 수 있습니다.

```typescript
type 타입별칭이름 = 타입;
```

아니면 객체 형식으로 만들 수도 있습니다.

```typescript
type 타입별칭이름 = {
	매개변수: 타입;
	매개변수: 타입;
};
```

또 유니온 타입에도 사용할 수 있습니다. 

```typescript
type 타입별칭이름 = 타입1 | 타입2;
```

그럼 아까전의 삼각형과 사각형의 넓이를 구하는 코드를 타입 별칭을 통해 바꿔볼까요?

```typescript
type data = {
	width: number;
	height: number;
}

function getTriangleArea(dt: data): number {
	return dt.width * dt.height / 2;
}

function getSqareArea(dt: data): number {
	return dt.width * dt.height;
}
```

코드가 훨씬 깔끔해졌네요!

## 인터페이스

사실 타입 별칭 말고도, 객체 타입을 만드는 방법은 또 있습니다. 바로 인터페이스죠! 인터페이스는 이렇게 사용할 수 있습니다.

```typescript
interface 인터페이스이름 {
	매개변수: 타입;
	매개변수: 타입;
}
```

거의 타입 별칭과 비슷비슷하죠? 그러면 인터페이스를 통해 타입 별칭에서 사용했던 삼각형과 사각형의 넓이를 구하는 코드를 바꿔볼까요?

```typescript
interface data {
	width: number;
	height: number;
}

function getTriangleArea(dt: data): number {
	return dt.width * dt.height / 2;
}

function getSqareArea(dt: data): number {
	return dt.width * dt.height;
}
```

## 인터페이스 / 타입 별칭 확장하기

인터페이스와 타입 별칭은 마치 상속 같은 매커니즘으로 확장시킬 수 있습니다. 인터페이스는 다음과 같은 방법으로 확장을 할 수 있습니다.

```typescript
interface 인터페이스이름 extend 확장할인터페이스이름 {
}
```

하지만 타입 별칭은 조금 다릅니다. 사실 타입스크립트는 확장을 정식으로 지원하지는 않습니다. 뒤에서 다룰 것이지만, 타입 별칭은 확장이 되지 않기 때문이죠. 하지만 교집합(양쪽의 모든 요소로 이뤄짐)을 이용해서 우회적으로는 할 수 있습니다.

```typescript
type 타입별칭이름 = 확장시킬타입별칭이름 & {

}
```

어떤 상황에 확장을 사용할 수 있을까요? 예를 들어 이런 인터페이스 코드가 주어졌다고 쳐 봅시다:

```typescript
interface user {
	id: number;
	name: string;
}
```

유저의 아이디와 이름을 지정하는 인터페이스네요. 하지만 특정 어드민 유저에게는 특정한 기능을 사용하고 싶은지 정하도록 만들고 싶을 수도 있을 것입니다. 이떄 인터페이스 확장을 사용하면 쉽게 만들 수 있죠!

```typescript
interface admin extends user {
	permissions: Permission[];
}
```

또 만약 user가 타입 별칭으로 주어졌다면, 이렇게 하면 될 것입니다:

```typescript
type user = {
	id: number;
	name: string;
}

type admin = user & {
	permissions: Permission[];
}
```

## 타입 별칭 vs 인터페이스

계속 보셨다 싶이, 타입 별칭과 인터페이스는 거의 99%가 비슷합니다. 그러면 왜 두 개의 기능을 분리해놓은 걸까요? 여기서 우리는 1%의 차이점이 있다는 사실을 알 수 있습니다. 그것은 바로 타입 별칭은 확장이 되지 않지만 인터페이스는 확장이 된다는 것입니다!

인터페이스는 이미 있던 인터페이스에 새 매개변수를 추가 할 수 있습니다.

```typescript
interface macbook {
	is_pro: boolean;
}

interface macbook { // 에러 없음!
	storage: number;
}
```

하지만 타입 별칭은 새 매개변수를 추가하는 것이 불가능합니다.

```typescript
type macbook = {
	is_pro: boolean;
}

type macbook = { // 에러 발생!
	storage: number;
}
```

그렇기에 이 점을 어느정도는 기억해주시면 좋습니다.

## 글을 마치며

이렇게 오늘은 타입스크립트의 타입 별칭과 인터페이스, 이 둘의 차이점을 알아보았습니다. 다음으론 리터럴 타입에 대해 배워보겠습니다.