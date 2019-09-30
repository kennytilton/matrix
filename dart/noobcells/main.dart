typedef dynamic OnCall(List);

class VarargsFunction extends Function {
  OnCall _onCall;

  VarargsFunction(this._onCall);

  call() => _onCall([]);

  noSuchMethod(Invocation invocation) {
    final arguments = invocation.positionalArguments;
    return _onCall(arguments);
  }
}

main() {
  final superHeroes = new VarargsFunction((arguments) {
    for (final superHero in arguments) {
      print("There's no stopping ${superHero}");
    }
  });
  superHeroes(['UberMan', 'Exceptional Woman', 'The Hunk']);
}