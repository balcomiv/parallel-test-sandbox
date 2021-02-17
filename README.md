# ParallelTestSandbox

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.7.

# Workspace Creation

- [OctoPerf Multi App Workspace](https://octoperf.com/blog/2019/08/22/kraken-angular-workspace-multi-application-project/#create-an-application)

- `ng new kraken --createApplication=false --directory=frontend --interactive=false`

## Create Applications

`ng generate application administration --style=scss --routing=true`
`ng generate application gatling --style=scss --routing=true`

## Create Libraries

`ng generate library tools`
`ng generate library vendors`

## Generating Component in Library (you may have to specify style each time due to lib style preprocessor limitations)

`ng generate component my-component --style=scss --project=tools`

## Helpful Sites

- [ng test: Collect total code coverage in multi project repository](https://github.com/angular/angular-cli/issues/11268)

- [karma-parallel](https://stackoverflow.com/questions/42965037/is-it-possible-to-run-parallel-tests-using-karma)
- https://medium.com/angular-in-depth/angular-unit-testing-performance-34363b7345ba

- [Simon Test](https://blog.simontest.net/make-your-angular-tests-fly-9407065a8226)

- https://www.devbridge.com/articles/resolving-common-technical-debt-to-speed-up-angular-development/

## Helpful Commands

- `ng test --project=rmx --include **/*a-test.spec.ts`
