# 타입스크립트의 클래스 - 추상 클래스
## 추상 클래스란?
추상 클래스는 구현이 되어있지 않은 메소드를 포함하는 클래스입니다. 좀 더 위에서 속성과 메소드의 형태를 만들며, 마치 **템플릿**같은 개념입니다. 그리고 추상 클래스는 코드를 짤때의 효율성을 올려줍니다.

추상 클래스는 항상 다른 클래스에서 상속해서 사용하며, 직접 객체를 만들 수 없습니다. 또한 상속한 자식 클래스에서는 반드시 부모의 추상 클래스를 구현해야 합니다.

그럼 예를 한번 들어볼까요?

```typescript
abstract class Job {
	public iDontWantToWork() {
		// 솔직히 일하기 싫은 날이 많지 않나요?
		console.log("ㅏㅏㅏㅏㅏㅏㅏ 일하기 싫다ㅏㅏㅏㅏㅏ");
		console.log("하지만 난 돈을 벌어야 한다")
	}
	
	public abstract work();
}
```

이건 [타입스크립트의 클래스](/typescript/typescripts-class)에서 나왔던 자바 코드를 타입스크립트로 바꾼 것입니다. 이 `Job` 클래스는 추상 클래스입니다. 왜일까요? 바로 **다른 클래스들과 공통점을 가지고 있기 때문이죠.** 이 클래스는 직업 클래스입니다. 즉, 일하는 것과 일하기 싫다라는 기능을 가지고 있다는 공통점이 다른 클래스들과 있다는 것이죠. 하지만 직업마다 하는 일이 다르니, `work()`를 추상 메서드로 만들어 주었습니다. 그럼 이렇게 사용할 수 있죠!

```typescript
class Programer extends Job {
	constructor() {
		super();
	}

	public work() {
		super.iDontWantToWork();
		console.log("에러를 고치려다 7개의 에러를 생성하기");
		console.log("그래놓고 어???? 시전하기");
	}
}
```

## 타입스크립트에서 추상 클래스를 사용하는법

타입스크립트에서 추상 클래스를 만들기 위해선 `class`앞에 `abstract`만 붙히면 됩니다.

```typescript
abstract class 클래스이름 {
}
```

그리고 타입스크립트에서 추상 메소드를 만드려면 메소드 앞에 `abstract` 키워드를 붙히기만 하면 됩니다!

```typescript
abstract class 추상클래스 {
	abstract 추상메소드();
}
```

:::tip
추상 메소드를 만들 때에는 중괄호( { } )를 사용할 수 없습니다!
:::

이제 추상 메소드를 사용하기 위해서는 다른 클래스에서 상속을 하면 됩니다.

```typescript
abstract class 추상클래스 {
	abstract 추상메소드();
}

class 클래스 extends 추상클래스 {
	추상메소드() { // 추상 메소드는 반드시 구현해야 합니다!
		console.log("추상적인 메소드와 추상적인 맥북 사고싶다!");
	}
}
```

## 글을 마치며

이렇게 오늘은 타입스크립트의 추상 클래스에 대해 알아보았습니다. 다음으론  readonly, getter/setter, static을 배워보겠습니다.
