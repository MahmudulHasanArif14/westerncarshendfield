import { z } from 'zod';
export const schemas = {
  pages: {
    home: z.object({
      "hero": z.object({
        "heading": z.string(),
        "subheading": z.string(),
        "body": z.string(),
        "trustItems": z.array(z.string())
      }),
      "intro": z.object({
        "heading": z.string(),
        "subheading": z.string(),
        "body": z.string(),
        "cta": z.string()
      }),
      "whyUs": z.object({
        "heading": z.string(),
        "items": z.array(z.object({
          "id": z.string(),
          "icon": z.string(),
          "title": z.string(),
          "body": z.string()
        }))
      }),
      "services": z.object({
        "heading": z.string(),
        "items": z.array(z.object({
          "id": z.string(),
          "icon": z.string(),
          "title": z.string(),
          "body": z.string(),
          "cta": z.string(),
          "href": z.string()
        }))
      }),
      "airports": z.object({
        "heading": z.string(),
        "subheading": z.string(),
        "items": z.array(z.object({
          "id": z.string(),
          "name": z.string(),
          "desc": z.string(),
          "href": z.string()
        }))
      }),
      "vehicles": z.object({
        "heading": z.string(),
        "subheading": z.string(),
        "items": z.array(z.object({
          "id": z.string(),
          "category": z.string(),
          "passengers": z.string(),
          "luggage": z.string(),
          "desc": z.string()
        }))
      }),
      "team": z.object({
        "heading": z.string(),
        "subheading": z.string(),
        "body": z.string(),
        "cta": z.string()
      }),
      "about": z.object({
        "heading": z.string(),
        "body": z.string(),
        "cta": z.string()
      }),
      "areas": z.object({
        "heading": z.string(),
        "subheading": z.string(),
        "locations": z.array(z.string()),
        "cta": z.string()
      }),
      "app": z.object({
        "heading": z.string(),
        "body": z.string(),
        "appStoreLabel": z.string(),
        "googlePlayLabel": z.string()
      }),
      "faq": z.object({
        "heading": z.string(),
        "items": z.array(z.object({
          "id": z.string(),
          "question": z.string(),
          "answer": z.string()
        }))
      }),
      "finalCta": z.object({
        "heading": z.string(),
        "body": z.string()
      })
    }),
    about: z.object({
      "hero": z.object({
        "heading": z.string(),
        "body": z.string()
      }),
      "overview": z.object({
        "heading": z.string(),
        "body": z.string()
      }),
      "approach": z.object({
        "heading": z.string(),
        "body": z.string()
      }),
      "booking": z.object({
        "heading": z.string(),
        "body": z.string()
      }),
      "whyUs": z.array(z.object({
        "id": z.string(),
        "title": z.string(),
        "body": z.string()
      })),
      "cta": z.object({
        "heading": z.string(),
        "body": z.string()
      })
    }),
    contact: z.object({
      "hero": z.object({
        "heading": z.string(),
        "body": z.string()
      }),
      "details": z.object({
        "address": z.string(),
        "phone": z.string(),
        "whatsapp": z.string(),
        "email": z.string()
      }),
      "form": z.object({
        "heading": z.string(),
        "body": z.string()
      }),
      "cta": z.object({
        "heading": z.string(),
        "body": z.string()
      })
    }),
    airport_transfers: z.object({
      "hero": z.object({
        "eyebrow": z.string(),
        "heading": z.string(),
        "subheading": z.string()
      }),
      "intro": z.object({
        "heading": z.string(),
        "paragraphs": z.array(z.string())
      }),
      "terminals": z.object({
        "heading": z.string(),
        "subheading": z.string(),
        "items": z.array(z.object({
          "id": z.string(),
          "name": z.string(),
          "description": z.string()
        }))
      }),
      "whyUs": z.object({
        "heading": z.string(),
        "items": z.array(z.object({
          "id": z.string(),
          "icon": z.string(),
          "title": z.string(),
          "description": z.string()
        }))
      }),
      "areas": z.object({
        "heading": z.string(),
        "subheading": z.string(),
        "locations": z.array(z.string())
      }),
      "cta": z.object({
        "heading": z.string(),
        "subheading": z.string(),
        "phone": z.string(),
        "buttonLabel": z.string()
      })
    }),
    terms_conditions: z.object({
      "hero": z.object({
        "heading": z.string(),
        "subheading": z.string()
      }),
      "lastUpdated": z.string(),
      "companyName": z.string(),
      "companyNumber": z.string(),
      "address": z.string(),
      "phone": z.string(),
      "email": z.string(),
      "sections": z.array(z.object({
        "id": z.string(),
        "heading": z.string(),
        "body": z.array(z.object({
          "id": z.string(),
          "text": z.string()
        }))
      }))
    }),
    gatwick_transfers: z.object({
      "hero": z.object({
        "eyebrow": z.string(),
        "heading": z.string(),
        "subheading": z.string()
      }),
      "intro": z.object({
        "heading": z.string(),
        "paragraphs": z.array(z.string())
      }),
      "terminals": z.object({
        "heading": z.string(),
        "subheading": z.string(),
        "items": z.array(z.object({
          "id": z.string(),
          "name": z.string(),
          "description": z.string()
        }))
      }),
      "whyUs": z.object({
        "heading": z.string(),
        "items": z.array(z.object({
          "id": z.string(),
          "icon": z.string(),
          "title": z.string(),
          "description": z.string()
        }))
      }),
      "coverage": z.object({
        "heading": z.string(),
        "subheading": z.string(),
        "areas": z.array(z.string())
      }),
      "cta": z.object({
        "heading": z.string(),
        "subheading": z.string(),
        "buttonLabel": z.string()
      })
    }),
    our_services: z.object({
      "hero": z.object({
        "eyebrow": z.string(),
        "heading": z.string(),
        "subheading": z.string()
      }),
      "intro": z.object({
        "heading": z.string(),
        "paragraphs": z.array(z.string())
      }),
      "services": z.array(z.object({
        "id": z.string(),
        "icon": z.string(),
        "title": z.string(),
        "description": z.string(),
        "href": z.string()
      })),
      "whyUs": z.object({
        "heading": z.string(),
        "items": z.array(z.object({
          "id": z.string(),
          "icon": z.string(),
          "title": z.string(),
          "description": z.string()
        }))
      }),
      "coverage": z.object({
        "heading": z.string(),
        "subheading": z.string(),
        "areas": z.array(z.string())
      }),
      "cta": z.object({
        "heading": z.string(),
        "subheading": z.string(),
        "buttonLabel": z.string()
      })
    }),
    services: z.object({
      "hero": z.object({
        "heading": z.string(),
        "body": z.string()
      }),
      "services": z.array(z.object({
        "id": z.string(),
        "icon": z.string(),
        "title": z.string(),
        "desc": z.string(),
        "img": z.string()
      })),
      "cta": z.object({
        "heading": z.string(),
        "body": z.string()
      })
    }),
    airport_gatwick: z.object({
      "hero": z.object({
        "heading": z.string(),
        "body": z.string()
      }),
      "sections": z.array(z.object({
        "id": z.string(),
        "heading": z.string(),
        "body": z.string()
      })),
      "faq": z.array(z.object({
        "id": z.string(),
        "question": z.string(),
        "answer": z.string()
      })),
      "cta": z.object({
        "heading": z.string(),
        "body": z.string()
      })
    }),
    airport_heathrow: z.object({
      "hero": z.object({
        "heading": z.string(),
        "body": z.string()
      }),
      "sections": z.array(z.object({
        "id": z.string(),
        "heading": z.string(),
        "body": z.string()
      })),
      "faq": z.array(z.object({
        "id": z.string(),
        "question": z.string(),
        "answer": z.string()
      })),
      "cta": z.object({
        "heading": z.string(),
        "body": z.string()
      })
    }),
    airport_stansted: z.object({
      "hero": z.object({
        "heading": z.string(),
        "body": z.string()
      }),
      "sections": z.array(z.object({
        "id": z.string(),
        "heading": z.string(),
        "body": z.string()
      })),
      "faq": z.array(z.object({
        "id": z.string(),
        "question": z.string(),
        "answer": z.string()
      })),
      "cta": z.object({
        "heading": z.string(),
        "body": z.string()
      })
    }),
    airport_luton: z.object({
      "hero": z.object({
        "heading": z.string(),
        "body": z.string()
      }),
      "sections": z.array(z.object({
        "id": z.string(),
        "heading": z.string(),
        "body": z.string()
      })),
      "faq": z.array(z.object({
        "id": z.string(),
        "question": z.string(),
        "answer": z.string()
      })),
      "cta": z.object({
        "heading": z.string(),
        "body": z.string()
      })
    }),
    airport_london_city: z.object({
      "hero": z.object({
        "heading": z.string(),
        "body": z.string()
      }),
      "sections": z.array(z.object({
        "id": z.string(),
        "heading": z.string(),
        "body": z.string()
      })),
      "faq": z.array(z.object({
        "id": z.string(),
        "question": z.string(),
        "answer": z.string()
      })),
      "cta": z.object({
        "heading": z.string(),
        "body": z.string()
      })
    }),
    faq: z.object({
      "hero": z.object({
        "heading": z.string(),
        "body": z.string()
      }),
      "items": z.array(z.object({
        "id": z.string(),
        "question": z.string(),
        "answer": z.string()
      }))
    }),
    areas: z.object({
      "hero": z.object({
        "heading": z.string(),
        "body": z.string()
      }),
      "intro": z.string(),
      "locations": z.array(z.object({
        "id": z.string(),
        "name": z.string(),
        "desc": z.string(),
        "href": z.string()
      }))
    }),
    area_henfield: z.object({
      "hero": z.object({
        "heading": z.string(),
        "body": z.string()
      }),
      "intro": z.object({
        "heading": z.string(),
        "body": z.string()
      }),
      "airports": z.object({
        "heading": z.string(),
        "body": z.string()
      }),
      "faq": z.array(z.object({
        "id": z.string(),
        "question": z.string(),
        "answer": z.string()
      })),
      "cta": z.object({
        "heading": z.string(),
        "body": z.string()
      })
    }),
    lp_airport_transfers_offer: z.object({
      "hero": z.object({
        "badge": z.string(),
        "heading": z.string(),
        "headingAccent": z.string(),
        "subheading": z.string(),
        "ctaBook": z.string(),
        "ctaCall": z.string()
      }),
      "countdown": z.object({
        "activeLabel": z.string(),
        "upcomingLabel": z.string(),
        "expiredText": z.string(),
        "expiredCta": z.string()
      }),
      "airports": z.object({
        "heading": z.string(),
        "subheading": z.string()
      }),
      "features": z.object({
        "heading": z.string(),
        "subheading": z.string()
      }),
      "cta": z.object({
        "heading": z.string(),
        "subheading": z.string(),
        "ctaBook": z.string(),
        "ctaWhatsapp": z.string(),
        "callPrefix": z.string()
      }),
      "trust": z.array(z.object({
        "id": z.string(),
        "val": z.string(),
        "label": z.string()
      }))
    }),
    blog_listing: z.object({
      "heading": z.string(),
      "subheading": z.string(),
      "emptyMessage": z.string(),
      "readMore": z.string(),
      "backToBlog": z.string()
    })
  },
  data: {
    blog: z.array(z.object({
      "id": z.string(),
      "slug": z.string(),
      "title": z.string(),
      "excerpt": z.string(),
      "author": z.string(),
      "publishedAt": z.string(),
      "category": z.string(),
      "tags": z.array(z.string()),
      "featuredImage": z.string(),
      "seoTitle": z.string(),
      "seoDescription": z.string(),
      "published": z.boolean(),
      "content": z.string()
    }))
  }
};
export type Schemas = typeof schemas;