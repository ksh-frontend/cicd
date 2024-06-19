# Github Actions + pm2 CI/CD

1. repository/.github/workflow/github-actions.yml 파일 생성
- github repository에 ./github/workflow/파일명.yml로 파일을 생성합니다.

### Workflow syntax for Github Actions
- [출처] https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#on

#### name
Repository의 `Actions`에서 표시되는 workflow의 이름입니다. 생략하면 .yml 파일의 경로가 workflow의 이름이 됩니다. 
```
# no name example
.github/workflows/study.yml
```

#### run-name
workflor `run`의 이름입니다. `Actions` 탭에 있는 실행목록에 표시되는 이름입니다.
생략 시 Actions를 트리거 시킨 이벤트의 정보(push인 경우 commit messange)가 표시됩니다.

#### on
workflow를 자동으로 트리거 하고싶을때 사용합니다.
어떤 이벤트가 발생했을 때 트리거하고싶은지 적으면 됩니다.

```
# example

on: push // single
on: [push, fork] // multi
on:
    push:
        branches:
            - main
            - 'releases/**'
        branches-ignore:
            - 'releases/**-alpha'
```
- [more] https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows

<!-- #### env

#### jobs


 -->
