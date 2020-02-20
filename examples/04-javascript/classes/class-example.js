const PsiBarRatio = 0.0689476

class PressureConverter {
    barToPsi(value) {
        return value / PsiBarRatio
    }

    psiToBar(value) {
        return value * PsiBarRatio
    }
}

const pc = new PC()

const pressure = pc.barToPsi(1)