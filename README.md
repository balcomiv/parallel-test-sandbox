# ParallelTestSandbox

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.7.

# Workspace Creation

- [OctoPerf Multi App Workspace](https://octoperf.com/blog/2019/08/22/kraken-angular-workspace-multi-application-project/#create-an-application)

## Create Applications

`ng generate application administration --style=scss --routing=true`
`ng generate application gatling --style=scss --routing=true`

## Create Libraries

`ng generate library tools`
`ng generate library vendors`

## Generating Component in Library (you may have to specify style each time due to lib style preprocessor limitations)

`ng generate component my-component --style=scss --project=tools`
