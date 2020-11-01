export interface Metrics {
    modelName: string,
    states: ModelStates[]
}

export interface ModelStates {
    stateName: string,
    count: number,
    backgroundColor: string
}