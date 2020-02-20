
const PsiBarRatio = 0.0689476

class PressureConverter {
    barToPsi(value) {
        return value / PsiBarRatio
    }

    psiToBar(value) {
        return value * PsiBarRatio
    }
}

module.exports = PressureConverter
