# 타입스크립트의 클래스 - 추상 클래스 - readonly, getter/setter, static

이번 시간에는 타입스크립트의 `readonly`, `getter/setter`, `static`을 배웁니다!
## readonly

`readonly`는 클래스의 속성을 접근만 가능하게 만들어줍니다. 그러니까, 외부에서는 접근만 가능하고 값을 수정하는건 불가능하다는 것이죠. 예를 들어볼까요?

```typescript
interface Setting {
	name: string;
	isProgramer: boolean;
}

class SettingManager {
	public setting: Setting;
	
	constructor(setting: Setting) {
		this.setting = setting;
	}
}

const manager = new SettingManager({
	name: "WaterCooler",
	isProgramer: true
});
```

설정을 저장해놓은 `SettingManager`라는 클래스가 있군요. 그런데 지금 보니, `SettingManager`의 `setting` 속성은 외부에서도 수정이 가능합니다.

```typescript
manager.setting.name = "ChatGPT";
```

하지만 여기에 `readonly`를 추가하면 외부에서 설정을 바꿀수 없죠!

```typescript
class SettingManager {
	public readonly setting: Setting;
	
	constructor(setting: Setting) {
		this.setting = setting;
	}
}
// ...(중략)
manager.setting.name = "ChatGPT"; // 에러 발생!
```

이것은 프로그래밍 할 때의 이점인데, 왜냐하면 실행 도중에 값이 바뀌면 큰일나는 경우가 간혹 있기 때문이죠.
## getter/setter

`get`과 `set`은 속성을 가져오거나 설정할때 사용할 수 있는 접근자. 입니다. `get`이 붙은 메소드는 속성을 가져올때, `set`이 붙은 메소드는 속성을 수정할 때 실행됩니다.

이런 코드가 있습니다:

```typescript
class Employee {
	public name: string;
}
```

여기서 만약 이름이라는 변수에 길이 제한을 추가하고 싶다면 어떻게해야 할까요? 이름을 변경할 때 감지하면 좋을 것 같습니다. 이럴때 `get`과 `set`을 사용할 수 있죠!

```typescript
class Employee {
	private name: string;
	
	get name(): string {
		return this.name;
	}
	
	set name(value: string): string {
		if (value.length > 5) { trow new Error("이름이 너무 김!"); }
		this.name = value;
	}
}

const bob = new Employee();
bob.name = "Robert Heartman" // 에러 발생!
```

## static

`static`은 전역 프로퍼티를 만들때 사용합니다. 뭔 소리냐고요? 원래 어떤 메소드나 속성에 접근하기 위해서는 `new` 키워드로 객체를 만들어야 했죠.

```typescript
const class = new Class();
```

하지만 `static`이 붙은 메소드나 속성은 바로 접근할 수 있습니다!

```typescript
Class.method();
```

참고로, 만약 클래스 안에서 `static` 속성이나 메소드에 접근하기 위해서는, 마치 `this` 처럼 클래스의 이름을 이용해 접근해야 합니다.

```typescript
class Class {
	public static x: number = 1;
	
	constructor() {
		Class.x = 67; // 이렇게
	}
}
```

예를 들어볼까요? 여기 `string`을 다룰수 있는 여러 기능들을 제공하는 `StringUtil`이라는 클래스가 있습니다:

```typescript
class StringUtil {
	public findChar(text: string, char: string): number {
		let counter = 0;
		for (const textChar of text) {
			if (textChar == char) {
				return counter;
			}
			counter++;
		}
		return -1;
	}
} // 일단 지금은 하나밖에 없어요
```

만약 `StringUtil`의 기능을 사용하고 싶으면, 객체를 만들어야 합니다.

```typescript
const util = new StringUtil();
console.log(util.findChar("맥북사고싶다", "다"));
// 너무너무귀찮아 내목숨을가져가도좋아 제발 생략해 줘
```

솔직히 귀찮죠? 하지만 `static`을 이용한다면, 이 점을 바로 해결할 수 있죠!

```typescript
class StringUtil {
	public static findChar(text: string, char: string): number {
		let counter = 0;
		for (const textChar of text) {
			if (textChar == char) {
				return counter;
			}
			counter++;
		}
		return -1;
	}
}

console.log(StringUtil.findChar("맥북사고싶다", "다"))
// 너무너무고마워 내목숨을가져가도좋아 제발 이런 코드 짜줘
```

## 글을 마치며

이렇게 오늘은 readonly, getter/setter, static에 대해 알아보았습니다. 다음으론 타입스크립트의 제네릭에 대해 알아보겠습니다.
