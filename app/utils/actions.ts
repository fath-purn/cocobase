"use client";

import { signIn, signUp, signOut } from "@/app/utils/auth";
import {
  POSTKELOMPOK,
  UPDATEKELOMPOK,
  POSTARTIKEL,
  UPDATEARTIKEL,
  POSTPENGUJIAN,
  UPDATEPENGUJIAN,
  POSTLAPAK,
  UPDATELAPAK,
  POSTPETANI,
  DELETE,
} from "@/app/utils/method";
import { toast } from "react-toastify";

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    toast.info("Loading...");
    const code = await signIn("credentials", Object.fromEntries(formData));

    if (code && code.success === true) {
      toast.success("Login berhasil!");
      window.location.href = "/admin";
      return code;
    }

    if (code && code.success === false) {
      toast.error(code.message);
      return code;
    }
  } catch (error) {
    toast.error("Login gagal!");
    return { success: false, message: "Authentication failed" };
  }
}

export async function register(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    toast.info("Loading...");
    const code = await signUp("credentials", Object.fromEntries(formData));

    if (code && code.success === true) {
      toast.success("Register berhasil!");
      window.location.href = "/auth/login";
      return code;
    }

    if (code && code.success === false) {
      toast.error(code.message);
      return code;
    }
  } catch (error) {
    toast.error("Register gagal!");
    console.error("Error during authentication:", error);
    return { success: false, message: "Authentication failed" };
  }
}

export async function SignOut() {
  try {
    await signOut();
    window.location.href = "/admin";
  } catch (error) {
    toast.error("Register gagal!");
    return { success: false, message: "Authentication failed" };
  }
}

export async function formDeleteHandler({
  id,
  params,
}: {
  id: number;
  params: string;
}) {
  try {
    toast.info("Loading...");

    const code = await DELETE(id, params);

    if (code && "success" in code && code.success === true) {
      toast.success(code.message);
      // window.location.href = `/admin/${params}`;
      return Promise.resolve(code);
    }

    if (code && "success" in code && code.success === false) {
      if (Array.isArray(code.message)) {
        toast.error(code.message);
        return Promise.resolve({ success: false, message: code.message });
      } else {
        toast.error(code.message);
        return Promise.resolve({ success: false, message: code.message });
      }
    }
  } catch (error) {
    toast.error("Server error");
    return Promise.resolve({
      success: false,
      message: "Form submission failed",
    });
  }
}

export async function formSubmitHandlerPetani(
  state:
    | { success: boolean; data: any; message?: undefined }
    | { success: boolean; message: any; data?: undefined }
    | undefined,

  formData: FormData
): Promise<
  | { success: boolean; data: any; message?: undefined }
  | { success: boolean; message: any; data?: undefined }
> {
  try {
    toast.info("Loading...");

    const code = await POSTPETANI("POSTPETANI", Object.fromEntries(formData));

    if (code && "success" in code && code.success === true) {
      toast.success(code.message);
       if(code.params === "produksi/status") {
        return Promise.resolve(code);
        }
        
        window.location.href = `/admin/${code.params}`;
      return code;
    }

    if (code && "success" in code && code.success === false) {
      if (Array.isArray(code.message)) {
        toast.error(code.message);
        return { success: false, message: code.message };
      } else {
        toast.error(code.message);
        return { success: false, message: code.message };
      }
    }

    console.log("empat")


    toast.success(code.message);
    return { success: false, message: code.message };
  } catch (error) {
    toast.error("Form submission failed");
    return { success: false, message: "Form submission failed" };
  }
}

export async function formSubmitHandlerArtikel(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    const code = await POSTARTIKEL("POSTARTIKEL", Object.fromEntries(formData));

    if (code && code.status === true) {
      window.location.href = "/dashboard/artikel";
      return code;
    }

    if (code && code.success === false) {
      return code;
    } else {
      return {
        success: false,
        message: code.message,
      };
    }
  } catch (error) {
    return { success: false, message: "Form submission failed" };
  }
}

export async function formUpdateHandlerArtikel(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    const code = await UPDATEARTIKEL(
      "UPDATEARTIKEL",
      Object.fromEntries(formData)
    );

    if (code && code.status === true) {
      window.location.href = "/dashboard/artikel";
      return code;
    }

    if (code && code.success === false) {
      return code;
    } else {
      return {
        success: false,
        message: code.message,
      };
    }
  } catch (error) {
    return { success: false, message: "Form submission failed" };
  }
}

export async function formSubmitHandlerKelompok(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    const code = await POSTKELOMPOK(
      "POSTKELOMPOK",
      Object.fromEntries(formData)
    );

    if (code && code.status === true) {
      window.location.href = "/dashboard/kelompok";
      return code;
    }

    if (code && code.status === false) {
      return code;
    } else {
      return {
        success: false,
        message: code.message,
      };
    }
  } catch (error) {
    return { success: false, message: "Form submission failed" };
  }
}

export async function formUpdateHandlerKelompok(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    const code = await UPDATEKELOMPOK(
      "UPDATEKELOMPOK",
      Object.fromEntries(formData)
    );

    if (code && code.status === true) {
      window.location.href = "/dashboard/kelompok";
      return code;
    }

    if (code && code.success === false) {
      return code;
    } else {
      return {
        success: false,
        message: code.message,
      };
    }
  } catch (error) {
    return { success: false, message: "Form submission failed" };
  }
}

export async function formSubmitHandlerPengujian(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    const code = await POSTPENGUJIAN(
      "POSTPENGUJIAN",
      Object.fromEntries(formData)
    );

    if (code && code.status === true) {
      window.location.href = "/dashboard/pengujian";
      return code;
    }

    if (code && code.status === false) {
      return code;
    } else {
      return {
        success: false,
        message: code.message,
      };
    }
  } catch (error) {
    return { success: false, message: "Form submission failed" };
  }
}

export async function formUpdateHandlerPengujian(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    const code = await UPDATEPENGUJIAN(
      "UPDATEPENGUJIAN",
      Object.fromEntries(formData)
    );

    if (code && code.status === true) {
      window.location.href = "/dashboard/pengujian";
      return code;
    }

    if (code && code.success === false) {
      return code;
    } else {
      return {
        success: false,
        message: code.message,
      };
    }
  } catch (error) {
    return { success: false, message: "Form submission failed" };
  }
}

export async function formSubmitHandlerLapak(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    const code = await POSTLAPAK("POSTLAPAK", Object.fromEntries(formData));

    if (code && code.status === true) {
      window.location.href = "/dashboard/lapak";
      return code;
    }

    if (code && code.status === false) {
      return code;
    } else {
      return {
        success: false,
        message: code.message,
      };
    }
  } catch (error) {
    return { success: false, message: "Form submission failed" };
  }
}

export async function formUpdateHandlerLapak(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    const code = await UPDATELAPAK("UPDATELAPAK", Object.fromEntries(formData));

    if (code && code.status === true) {
      window.location.href = "/dashboard/lapak";
      return code;
    }

    if (code && code.success === false) {
      return code;
    } else {
      return {
        success: false,
        message: code.message,
      };
    }
  } catch (error) {
    return { success: false, message: "Form submission failed" };
  }
}
