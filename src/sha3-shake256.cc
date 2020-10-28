#include "sha3-shake256.h"


Napi::Value init(const Napi::CallbackInfo& info) {

  Napi::Env env = info.Env();

    Napi::Buffer<shake256incctx> s = info[0].As<Napi::Buffer<shake256incctx>>();

    shake256_inc_init(s.Data());

    return Napi::Number::New(info.Env(), 0);

}

Napi::Value adsorb(const Napi::CallbackInfo& info) {

  Napi::Env env = info.Env();

    Napi::Buffer<shake256incctx> s = info[0].As<Napi::Buffer<shake256incctx>>();

    Napi::Buffer<uint8_t> in = info[1].As<Napi::Buffer<uint8_t>>();

    shake256_inc_absorb(s.Data(), in.Data(), in.Length());

    return Napi::Number::New(info.Env(), 0);

}

Napi::Value finalize(const Napi::CallbackInfo& info) {

  Napi::Env env = info.Env();

    Napi::Buffer<shake256incctx> s = info[0].As<Napi::Buffer<shake256incctx>>();

    shake256_inc_finalize(s.Data());

    return Napi::Number::New(info.Env(), 0);

}

Napi::Value squeeze(const Napi::CallbackInfo& info) {

  Napi::Env env = info.Env();

    Napi::Buffer<shake256incctx> s = info[0].As<Napi::Buffer<shake256incctx>>();

    Napi::Buffer<uint8_t> out = info[1].As<Napi::Buffer<uint8_t>>();

    shake256_inc_squeeze(out.Data(), out.Length(), s.Data());

    return Napi::Number::New(info.Env(), 0);

}

Napi::Value release(const Napi::CallbackInfo& info) {

  Napi::Env env = info.Env();

    Napi::Buffer<shake256incctx> s = info[0].As<Napi::Buffer<shake256incctx>>();

    shake256_inc_ctx_release(s.Data());

    return Napi::Number::New(info.Env(), 0);

}


Napi::Object Init(Napi::Env env, Napi::Object exports) {
  exports.Set(Napi::String::New(env, "init"),
              Napi::Function::New(env, init));
  exports.Set(Napi::String::New(env, "adsorb"),
              Napi::Function::New(env, adsorb));
  exports.Set(Napi::String::New(env, "finalize"),
              Napi::Function::New(env, finalize));
  exports.Set(Napi::String::New(env, "squeeze"),
              Napi::Function::New(env, squeeze));
  exports.Set(Napi::String::New(env, "release"),
              Napi::Function::New(env, release));
  return exports;
}

NODE_API_MODULE(sha3_shake256, Init);
