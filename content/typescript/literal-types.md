# 리터럴 타입이란?

이런 코드가 있다고 쳐 봅시다.

```typescript
function print_gender(gender: string) {
	switch (expr) {
		case "male":
			console.log("hello, mr!");
			break;
		case "female":
			console.log("hello, ms!");
			break;
		case "croissant":
			console.log("wait, are you croissant???")
			break;
	}
}
```

성별을 입력하면 그에 맞는 호칭을 출력하는 함수인 것 같습니다. 그런데 이 함수를 사용할 때 살짝의 오타가 나면 어떨까요?

```typescript
print_gender("crossant") // i가 없어요. 아니 없어요
```

아무것도 출력되지 않을겁니다. 이렇게 한 글자만 틀려도 이상한 상황이 발생할때는 리터럴 타입과 유니온 타입을 같이 쓰는것이 좋습니다.

## 리터럴 타입

리터럴 타입은 `string`이나 `number`같은 일반적인 타입 외의 구체적인 문자열이나 숫자 값을 타입으로 사용하는 타입입니다. 변수에 리터럴 타입을 사용하려면 이렇게 하면 됩니다.

```typescript
let 변수이름: "문자열혹은숫자" = 값;
```

하지만 이렇게 하면 리터럴 타입에 들어간 값만 사용이 가능합니다. 어떤 사람이 변수에 한 가지 값만 넣어하고 싶겠습니까? 하지만 앞전에 배운 유니온 타입을 같이 사용한다면, 리터럴 타입은 무궁무진하게 변합니다. 앞전의 함수에서

```typescript
function print_gender(gender: string) {
```

`string`부분을 유니온 타입과 리터럴 타입을 통해 바꾼다면...

```typescript
function print_gender(gender: "male" | "female" | "croissant") {
```

이렇게 작성 할 수 있겠네요. 그럼 지정해놓은 3개의 타입 중 하나만 작성해야 하니, 오타가 나서 오류가 날 가능성은 없을 것 같습니다!

## 글을 마치며

이렇게 오늘은 리터럴 타입을 알아보았습니다. 다음으론 타입스크립트의 클래스에 대해 배워보겠습니다.