
const PsiBarRatio = 0.0689476

export default class PressureConverter {
    barToPsi(value) {
        return value / PsiBarRatio
    }

    psiToBar(value) {
        return value * PsiBarRatio
    }
}

