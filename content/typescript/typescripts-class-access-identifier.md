# 타입스크립트의 클래스 - 접근 지시자

접근 지시자는 특정한 메소드나 속성을 어떻게 접근할 수 있는지 설정할수 있는 특별한 키워드입니다. 타입스크립트의 접근 지시자는 `public`, `private`, `protected`로 나누어지며, 아무 접근 지시자가 없으면 타입스크립트에선 기본적으로 `public`으로 지정합니다!

## public

`public`은 적용한 메소드나 속성을 클래스 외부 어디서나 접근할 수 있게 합니다.

```typescript
class Rectangle {
	height: number;
	width: number;
	
	constructor(height: number, width: number) {
		this.height = height;
		this.width = width;
	}
	
	getHeight(): number {
		return height;
	}
	
	getWidth(): number {
		return width;
	}
}
```

[앞](#타입스크립트의 클래스)에 있었던 이 사각형 클래스를 가져 와볼까요? 만약 이 클래스에서 `getheight()`와 `getWidth()`를 모든 코드에서 사용할 수 있게 하려면 어떻게 해야 할까요? 이럴때 public을 사용하면 모든 코드에서 이 메소드를 사용할 수 있게 해줍니다!

```typescript
class Rectangle {
	height: number;
	width: number;

	constructor(height: number, width: number) {
		this.height = height;
		this.width = width;
	}
	
	public getHeight(): number { // 매우 개방적이군요?
		return height;
	}
	
	public getWidth(): number {
		return width;
	}
}

const rect = new Rectangle(1, 2)
console.log(rect.getHeight()) // 외부에서도 접근 할 수 있다!
```

## private 

`private`는 `public`과 달리, 클래스 내부를 제외한 어떤 코드에서도 속성이나 메소드를 접근 할 수 없게 만듭니다.

```typescript
class Rectangle {
	height: number;
	width: number;

	constructor(height: number, width: number) {
		this.height = height;
		this.width = width;
	}
	
	public getHeight(): number {
		return height;
	}
	
	public getWidth(): number {
		return width;
	}
}
```

이 코드에서 이미 가로와 세로의 값을 리턴해주는 `getWidth()`와 `getHeight()` 메소드가 있고, 외부에서 `height`와 `width` 속성을 수정하지 못하게 하고 싶습니다. 이럴때 private를 쓸수 있죠!

```typescript
class Rectangle {
	private height: number; // 이제 외부에서는 못 꺼냅니다.
	private width: number;

	constructor(height: number, width: number) {
		this.height = height;
		this.width = width;
	}
	//...
}

const rect = new Rectangle(1, 2);
console.log(rect.height); // 에러 발생! 외부에서 접근할 수 없다!
```

또한 자바스크립트의 내장 기능으로도 `private`를 사용 할 수도 있습니다. 비공개 속성 앞에 `#`을 붙히면 됩니다!

```typescript
class Rectangle {
	#height: number; // 앞에 #을 붙혀도 못 꺼냅니다.
	#width: number;

	constructor(height: number, width: number) {
		this.#height = height;
		this.#width = width;
	}
	//...
}

const rect = new Rectangle(1, 2);
console.log(rect.height); // 에러 발생! 외부에서 접근할 수 없다!
```

## protected

`protected`는 조금 특이한 접근 지시자입니다. `protected`는 `private`하고 유사하게 클래스 내부를 제외한 다른 코드에서 접근하지 못하게 합니다. 하지만 딱 하나, 어떠한 클래스를 상속한 자식 클래스는 속성이나 메소드에 접근할 수 있게 합니다.

이런 코드가 있습니다:

```typescript
class Code {
	error() {
		console.log("뭔지도 모를 에러 발생!");
	}
}

class TrashCode extends Code {
	constructor() {
		super();
		super.error();
	}
}
```

여기서 우리는 TrashCode(쓰래기같은 코드)에서만 에러 메소드를 실행시키고 싶습니다. 그냥 코드에서 에러가 나면 안되니 말이죠...

```typescript
const code = new Code()
code.error() // 외부에서 에러 메소드 실행하기 히히
```

여기서 `protected`를 사용해 볼까요?

```typescript
class Code {
	protected error() {
		console.log("뭔지도 모를 에러 발생!");
	}
}

class TrashCode extends Code {
	constructor() {
		super();
		super.error();
	}
}

const code = new Code()
code.error() // 실행 불가! 에러 발생!
```

이제 더 이상 외부에서 접근 할 수 없군요.

## 글을 마치며

이렇게 오늘은 타입스크립트 클래스의 접근자에 대해 알아보았습니다. 다음으론 타입스크립트의 추상 클래스에 대해 알아보겠습니다.
